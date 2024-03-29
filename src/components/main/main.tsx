import { Navigate  } from "react-router-dom";
import { setAuth } from "../../redux/reducers/reducure"
import { useAppDispatch, useAppSelectortype } from "../../redux/store/store";
import { useEffect } from "react";
import { Calendar } from "./calendar/calendar";

export const MainPage = () => {

    const dispatch = useAppDispatch();

    const isAuth = useAppSelectortype((state)=> state.shcedule.isAuth)

    useEffect(()=>(
        console.log(isAuth)
    ),[])

    const handleClick = () => {
        dispatch(setAuth());
    }

    return isAuth ?  (
        <div>
            <button onClick={handleClick}>Logout</button>
            <Calendar/>
        </div>
    ) : (
        <Navigate to="/login"/>
    )
}