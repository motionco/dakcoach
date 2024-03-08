import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contact from "@/models/Contact";

export const POST = async (request) => {
    const body = await request.json();

    const newContact = new Contact(body);

    try {
        await connect();

        await newContact.save();

        return new NextResponse("Contact been created", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
