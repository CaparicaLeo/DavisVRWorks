import { NextResponse } from 'next/server';

export async function POST(request) {
    const formData = await request.json();
    
    formData.access_key = process.env.WEB3FORMS_ACCESS_KEY;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ success: false, message: "Erro no servidor" }, { status: 500 });
    }
}