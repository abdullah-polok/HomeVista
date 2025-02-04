import MongodbConnect from "@/database/mongodbConnect";
import propertyModel from "@/model/storeProperty";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const { id } = params;
    const data = await req.json();
    await MongodbConnect();
    await propertyModel.findByIdAndUpdate(id, data);
    return NextResponse.json({ message: "Propeerty updated successfully" }, { status: 200 });
}
export async function GET(req, { params }) {
    const { id } = params;
    await MongodbConnect();
    const Properties = await propertyModel.findOne({ _id: id });
    return NextResponse.json({ Properties}, { status: 200 });
}