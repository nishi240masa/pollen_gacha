import React, { useEffect } from "react";
import "./Snow.css";

function Snow() {
  useEffect(() => {
    const createSnow = () => {
      let snowContainer = document.querySelector(".snowContainer");

      // 雪の要素を作成
      let snow = document.createElement("span");
      // 雪の要素にクラスを追加
      snow.className = "snow";

      const minSize = 5;
      const maxSize = 10;

      // 雪のサイズをランダムに設定
      let snowSize = Math.random() * (maxSize - minSize) + minSize;
      // 雪のサイズを設定
      snow.style.width = snowSize + "px";
      snow.style.height = snowSize + "px";

      // 雪の位置をランダムに設定
      snow.style.left = Math.random() * 100 + "%";

      // snowContainerに雪を追加
      snowContainer.appendChild(snow);

      // 10秒後に雪を削除
      setTimeout(() => {
        snow.remove();
      }, 10000);
    };

    const snowInterval = setInterval(createSnow, 100); // 0.1秒ごとにcreateSnow関数を呼び出す

    return () => clearInterval(snowInterval); // インターバルのクリア用のクリーンアップ関数
  }, []); // 空の依存配列を使ってエフェクトを一度だけ実行するようにする

  return <div className="snowContainer"></div>;
}

export default Snow;
