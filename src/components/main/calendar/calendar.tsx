import dayjs from "dayjs"
import { CalendarHeader } from "./cakendarHeader/calendarHeader"
import { CalendarMonth } from "./calendarMonth/calendarMonth"

export const Calendar = () => {

    const HandleClick:any = () => {
    
        const getMonth = ( month:number = dayjs().month() ) => {
            const year = dayjs().year()
            const FirstDayOftheMonth = dayjs( new Date(year, month,  0)).day()
            let currentMonthCount = 0 - FirstDayOftheMonth
            const daysMatrix = new Array(5).fill([]).map(() => {
                return new Array(7).fill(null).map(() => {
                    currentMonthCount++
                    return dayjs(new Date( year, month, currentMonthCount))
                })
            })
            console.log(daysMatrix)

        }
        getMonth(3)
    }
    
    return(
        <div>
            Календарик
            <button onClick={HandleClick}>Клик</button>
            <CalendarHeader/>
            <CalendarMonth/>
        </div>
    )
}