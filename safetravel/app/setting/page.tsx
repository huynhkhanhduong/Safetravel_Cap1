"use client";
import React, { useState } from "react";
import Sidebar from "../components/setting/sidebar";
import PasswordForm from "../components/setting/password-form";
import AccountInformationForm from "../components/setting/account-inf";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import SlackBotConfigForm from "../components/setting/slack-config";

const Setting = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("account");

  // Render content dynamically based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Account Information</h2>
            <p className="text-sm text-gray-500 mb-8">
              Edit your profile quickly
            </p>
            <AccountInformationForm />
          </div>
        );
      case "password":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Password</h2>
            <PasswordForm />
          </div>
        );
      case "slack":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-2">Slack Bot Config</h2>
            <SlackBotConfigForm />
          </div>
        );
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className=" min-h-screen h-auto flex flex-col bg-[#D2FBFD]">
      {/* Header */}
      <Header />

      {/* Main content container with flex layout */}
      <div className=" w-full min-h-screen flex flex-1 h-full bg-[#D2FBFD]">
        {/* Sidebar */}
        <div className="w-1/3 p-4 m">
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Setting;
