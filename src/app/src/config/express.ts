
import "reflect-metadata";
import express, { Application } from "express";


export function configureExpress(app: Application) {

    //const routes = [UserController];

    //const container = new AppDependencies().init();

    app.use(express.json());

    //useContainer(container);

    //useExpressServer(app, {

        //controllers: routes
    //})
}