import { NextResponse } from 'next/server';





export async function GET() {
    return NextResponse.json(
        [
            {
                "name" : "InternShip",
                "id"   : 0,
                "title" : "FullStack Dev",
                "Date" : "Oct 2024 - Present",
                "info" : [
                    { "info": "seeking for Internship " },
                ]
            }
        ]
    );
}