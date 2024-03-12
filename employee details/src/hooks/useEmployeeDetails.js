import { useEffect } from "react";
import { addEmployeeDetails } from "../utils/slices/employeeSlice";
import { useDispatch } from "react-redux";

const useEmployeeDetails = () => {
    const dispatch = useDispatch()
    const fetchEmployeeDetails = async () => {
        try {
            const data = await fetch("http://localhost:8081/employee");
            const json = await data.json();
            dispatch(addEmployeeDetails(json))
        } catch (error) {
            console.log(error);
        }
    };
    /*eslint-disable */
    useEffect(() => {
        fetchEmployeeDetails();
    }, []);
    /*eslint-enable */
}
export default useEmployeeDetails