"use client";

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Suas Ideias, Documentos & Planos. Unificados. Bem vindo a <span className="underline">Zotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Zotion é o lugar onde o trabalho acontece <br/>
                melhor, rapido, com eficiência.
            </h3>
            <Button>
                Junte-se ao Zotion
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}