import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin :<i className="text-success "> {user?.name}</i>
          </h1>

          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            The average human body contains about five liters of blood, which is
            made of several cellular and non-cellular components such as Red
            blood cell, Platelet, and Plasma. Each type of component has its
            unique properties and can be used for different indications. The
            donated blood is separated into these components by the blood centre
            and one donated unit can save upto four lives depending on the
            number of components separated from your blood. UBLOOD offers a
            platform to connect volunteering blood donors and recipients. Blood
            donation has been prevalent for ages, however it is always a
            challenge to find the right donor at the right time. Blood donation
            through the years has become easier. For us to succeed in this noble
            effort of saving lives we are guided by multiple doctors and
            academics who are experts in the blood donation segment. Their
            passion and responsibility towards saving lives are depicted in
            these blogs below.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
