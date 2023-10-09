import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../Components/AuthForm/AuthForm";
import { setUserLoadingActions } from "../store/userReducer";
import { routes } from "../Helper/Conatants/routes";

export const Auth = () => {
  const loading = useSelector((state) => state.user.loading);
  const token = useSelector((state) => state.user.token);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setUserLoadingActions(false));
      navigate(routes.home);
    }
  }, [token]);
  return <>{loading ? <h1>Loading...</h1> : <AuthForm />}</>;
};
