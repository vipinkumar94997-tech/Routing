import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import Details from "../Pages/Details";
import Products from "../Pages/Products";
import Mobile from "../Pages/Mobile";
import Laptop from "../Pages/Laptop";
import Account from "../Pages/Account";
import Android from "../Pages/Android";
import AndroidPhones from "../Pages/AndroidPhones";
import Angular from "../Pages/Angular";
import Backend from "../Pages/Backend";
import CloudRun from "../Pages/CloudRun";
import CloudServices from "../Pages/CloudServices";
import ComputeEngine from "../Pages/ComputeEngine";
import Django from "../Pages/Django";
import AWS from "../Pages/AWS";
import EC2 from "../Pages/EC2";
import Electronics from "../Pages/Electronics";
import EthnicWear from "../Pages/EthnicWear";
import Fashion from "../Pages/Fashion";
import Firestore from "../Pages/Firestore";
import Frontend from "../Pages/Frontend";
import GamingLaptops from "../Pages/GamingLaptops";
import GoogleCloud from "../Pages/GoogleCloud";
import IPhones from "../Pages/IPhones";
import IOS from "../Pages/IOS";
import Java from "../Pages/Java";
import Jeans from "../Pages/Jeans";
import Kotlin from "../Pages/Kotlin";
import Lambda from "../Pages/Lambda";
import Laptops from "../Pages/Laptops";
import Laravel from "../Pages/Laravel";
import Men from "../Pages/Men";
import MobileDevelopment from "../Pages/MobileDevelopment";
import Mobiles from "../Pages/Mobiles";
import Node from "../Pages/Node";
import Notifications from "../Pages/Notifications";
import ObjectiveC from "../Pages/ObjectiveC";
import OfficeLaptops from "../Pages/OfficeLaptops";
import Orders from "../Pages/Orders";
import Privacy from "../Pages/Privacy";
import Profile from "../Pages/Profile";
import React1 from "../Pages/React1";
import S3 from "../Pages/S3";
import Security from "../Pages/Security";
import Settings from "../Pages/Settings";
import Shirts from "../Pages/Shirts";
import Swift from "../Pages/Swift";
import Tops from "../Pages/Tops";
import Vue from "../Pages/Vue";
import WebDevelopment from "../Pages/WebDevelopment";
import Whishlists from "../Pages/Whishlists";
import Women from "../Pages/Women";
import PageNotFound from "../Pages/PageNotFound";
// import { lazy } from "react";

// const Home = lazy(() => import("../Pages/Home"));

export const AllRouter = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
    icon: "home",
  },

  {
    element: <About />,
    path: "about",
    icon: "info",
  },

  {
    element: <Services />,
    path: "services",
    icon: "services",
    children: [
      {
        element: <WebDevelopment />,
        path: "web-dev",
        children: [
          {
            element: <Frontend />,
            path: "frontend",
            children: [
              {
                element: <React1 />,
                path: "react",
              },
              {
                element: <Vue />,
                path: "vue",
              },
              {
                element: <Angular />,
                path: "angular",
              },
            ],
          },
          {
            element: <Backend />,
            path: "backend",
            children: [
              {
                element: <Node />,
                path: "node",
              },
              {
                element: <Django />,
                path: "django",
              },
              {
                element: <Laravel />,
                path: "laravel",
              },
            ],
          },
        ],
      },

      {
        element: <MobileDevelopment />,
        path: "mobile-dev",
        children: [
          {
            element: <Android />,
            path: "android",
            children: [
              { element: <Kotlin />, path: "kotlin" },
              { element: <Java />, path: "java" },
            ],
          },
          {
            element: <IOS />,
            path: "ios",
            children: [
              { element: <Swift />, path: "swift" },
              { element: <ObjectiveC />, path: "objc" },
            ],
          },
        ],
      },

      {
        element: <CloudServices />,
        path: "cloud",
        children: [
          {
            element: <AWS />,
            path: "aws",
            children: [
              { element: <EC2 />, path: "ec2" },
              { element: <Lambda />, path: "lambda" },
              { element: <S3 />, path: "s3" },
            ],
          },
          {
            element: <GoogleCloud />,
            path: "gcp",
            children: [
              { element: <ComputeEngine />, path: "compute" },
              { element: <CloudRun />, path: "run" },
              { element: <Firestore />, path: "firestore" },
            ],
          },
        ],
      },
    ],
  },

  {
    element: <Products />,
    path: "products",
    children: [
      {
        element: <Electronics />,
        path: "electronics",
        children: [
          {
            element: <Mobiles />,
            path: "mobiles",
            children: [
              { element: <AndroidPhones />, path: "android" },
              { element: <IPhones />, path: "iphone" },
            ],
          },
          {
            element: <Laptops />,
            path: "laptops",
            children: [
              { element: <GamingLaptops />, path: "gaming" },
              { element: <OfficeLaptops />, path: "office" },
            ],
          },
        ],
      },
      {
        element: <Fashion />,
        path: "fashion",
        children: [
          {
            element: <Men />,
            path: "men",
            children: [
              { element: <Shirts />, path: "shirts" },
              { element: <Jeans />, path: "jeans" },
            ],
          },
          {
            element: <Women />,
            path: "women",
            children: [
              { element: <Tops />, path: "tops" },
              { element: <EthnicWear />, path: "ethnic" },
            ],
          },
        ],
      },
    ],
  },

  {
    element: <Account />,
    path: "account",
    children: [
      { element: <Profile />, path: "profile" },
      { element: <Orders />, path: "orders" },
      { element: <Whishlists />, path: "wishlist" },
      {
        element: <Settings />,
        path: "settings",
        children: [
          { element: <Security />, path: "security" },
          { element: <Notifications />, path: "notifications" },
          { element: <Privacy />, path: "privacy" },
        ],
      },
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);
