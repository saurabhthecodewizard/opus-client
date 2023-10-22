import { GridColDef } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../../../../global/redux/hooks";
import GenericPageTemplate from "../../common/components/GenericPageTemplate";
import GenericDataGrid from "../../common/components/GenericDataGrid";
import { useEffect } from "react";
import { getUsers } from "../actions/employee.action";
import Button from "@mui/material/Button";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, type: 'number' },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'middleName', headerName: 'Middle Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'nationality', headerName: 'Nationality', flex: 1 },
    { field: 'maritalStatus', headerName: 'Marital Status', flex: 1 },
];

const EmployeeHome: React.FC = () => {
    const { users, isLoading } = useAppSelector(state => state.employees);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <GenericPageTemplate title="Employees" subtitle="A list of all employees is displayed" pageActions={[<Button variant="contained">Add New Employee</Button>]}>
            <GenericDataGrid columns={columns} rows={users ?? []} isLoading={isLoading} />
        </GenericPageTemplate>
    )
}

export default EmployeeHome;