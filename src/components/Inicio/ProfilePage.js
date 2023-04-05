import React from "react";
import { AuthRoute } from "../Auth/auth";

export function ProfilePage() {

  return (
    <AuthRoute>
      <h1>Perfil</h1>
      <p>Welcome</p>
    </AuthRoute>
  )
}