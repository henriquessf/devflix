import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { Category, Course, Episode, User } from "../models";
import bcrypt from 'bcrypt';
import { locale } from './locale'
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOption } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
	resources: adminJsResources,
  branding: brandingOptions,
	locale: locale,
	dashboard: dashboardOptions
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs, 
  authenticationOption, 
  null, 
  {
    resave: false,
    saveUnitialized: false
  }
)
//arquivo de configuração do adminJs