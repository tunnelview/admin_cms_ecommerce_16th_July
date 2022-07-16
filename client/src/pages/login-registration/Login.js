import React, { useEffect } from "react";
import { LoginForm } from "../../components/login-form/LoginForm";
import { MainLayout } from "../../layout/MainLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userStore);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [navigate, user]);

  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default Login;
