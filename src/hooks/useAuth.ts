import { useSelector } from "react-redux"
import { RootState } from '../store/store';
import { useMemo } from "react";
import { User } from "../interface";

export const useAuth = (): User | null  => {
    const user = useSelector((state: RootState) => state.auth.user)
    return useMemo(() => (user), [user])
}