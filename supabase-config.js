"use strict";

const SUPABASE_URL =
    "COLOCA_AQUI_O_PROJECT_URL";

const SUPABASE_PUBLIC_KEY =
    "COLOCA_AQUI_A_PUBLISHABLE_KEY";

if (
    SUPABASE_URL.includes("COLOCA_AQUI") ||
    SUPABASE_PUBLIC_KEY.includes("COLOCA_AQUI")
) {
    console.warn(
        "Supabase ainda não configurado. " +
        "Adiciona o Project URL e a chave pública."
    );
} else {
    const {
        createClient
    } = window.supabase;

    window.supabaseClient = createClient(
        SUPABASE_URL,
        SUPABASE_PUBLIC_KEY
    );

    console.log(
        "Ligação ao Supabase configurada."
    );
}