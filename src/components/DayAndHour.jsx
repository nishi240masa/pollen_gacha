export const DayAndHour = () => {
    let date = new Date();
    // UTCに合わせるために-9,mapSp[0]に['citycode', 'date', 'pollen']が入っているので+1して合わせる
    let hour = date.getHours() - 9 + 1;
    if (hour < 0) {
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
        hour = hour + 24;
    }
    const day = `${date.getFullYear()}${("0" + (date.getMonth() + 1)).slice(-2)}${("0" + date.getDate()).slice(-2)}`;
    return [day,hour]
}