import { useState, useEffect } from "react";
import { DayAndHour } from "./DayAndHour";
import { openReverseGeocoder } from "https://cdn.skypack.dev/@geolonia/open-reverse-geocoder@latest";
export const Kahun = () => {
    const [pollen, setPollen] = useState();
    useEffect(() => {
        setPollen("花粉量取得中");
        //クリーンアップ関数 最初のレンダリングで２回読み込むのを防いでくれる
        return () => {
            fetchData();
            console.log("クリーンアップ関数");
        };
    }, []);
    // データが変更されたらローカルストレージに保存 
    useEffect(() => {
        localStorage.setItem("pollen", pollen);
    }, [pollen]);

    async function fetchData() {
        let citycode;
        //navigator.geolocation.getCurrentPosition(resolve, reject);を使うためのpromise
        let position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat, lon);
        await openReverseGeocoder([lon, lat]).then(result => {
            citycode = result.code;
        })
        //現在の日にちと時刻をdayとhourに代入
        const [day, hour] = DayAndHour();
        try {
            console.log(citycode);
            //ウェザーニュースのapi、花粉量を返す  citycode,時刻,花粉量が帰ってくる
            const res = await fetch(`https://wxtech.weathernews.com/opendata/v1/pollen?citycode=${citycode}&start=${day}&end=${day}`, { method: "GET" });
            const csvData = await res.text(); // CSV形式のデータをテキストとして取得
            //１行１行を配列にする
            const dataSp = csvData.split('\n');
            //map関数で２次元配列にする　['23219', '2024-03-20T00:00:00+09:00', '0']みたいなのが入る
            const mapSp = dataSp.map((data) => { return data.split(',') });
            console.log(mapSp);
            console.log(mapSp[hour]);
            //現在時刻の花粉量をtimePollに入れる
            setPollen(mapSp[hour][2] !== "-9999" ? mapSp[hour][2] : "情報なし");

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    //"citycode"をlocalStrageから消去
    localStorage.clear("citycode");

    return <div>{`${pollen}`}</div>;
}