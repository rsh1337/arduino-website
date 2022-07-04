import { signIn, useSession, getSession, signOut } from "next-auth/react";
import Router from "next/router";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/layouts";
import Adminpage from "../components/adminpage";
import Signinfuncton from "../components/signin";

export default function Index() {
  const toast = useToast();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <Layout title="Arduino :: Dashboard" displayy="none">
                  <Alert status="info">
            <AlertIcon />
            <VStack w="full">
            <AlertDescription>
              Email: demo@rares-andrei.me
            </AlertDescription>
            <AlertDescription>
              Password: demo
            </AlertDescription>
            </VStack>
          </Alert>
        <Signinfuncton/>
      </Layout>
    );
  }

  if (status === "authenticated") {
    return(
      <Layout title="Arduino :: Admin" displayy="none"><Adminpage/></Layout>
    )
  }
}