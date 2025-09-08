"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";



export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Suas Ideias, Documentos & Planos. Unificados. Bem vindo a <span className="underline">Zotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Zotion é o lugar onde o trabalho acontece <br/>
                melhor, rapido, com eficiência.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                <Spinner size="lg" />
                </div>
            )}

            {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href="/documents">
                Junte-se ao Zotion
                <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
            )}

                {!isAuthenticated && !isLoading &&(
                    <SignInButton mode="modal">
                        <Button>
                            Use Zotian gratuitamente
                           <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </SignInButton>
                )}
        </div>
    )
}