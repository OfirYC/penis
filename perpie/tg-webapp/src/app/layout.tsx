"use client";
import axios from "axios";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import WrappedText from "@/components/wrappers/text";
import { TelegramProvider } from "@/components/providers/telegram";
import { Web3AuthProvider } from "@/components/providers/web3auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        /> */}
      </head>

      <body className="">
        <Web3AuthProvider>
          <TelegramProvider>{children}</TelegramProvider>
        </Web3AuthProvider>
      </body>
    </html>
  );
}
