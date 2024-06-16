import Image from 'next/image'
import MainTitleBlock from "@/components/MainTitleBlock";
import SecondaryTitleBlock from "@/components/SecondaryTitleBlock";
import ParagraphBlock from "@/components/PragraphBlock";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <MainTitleBlock title="Consult Cue" subtitle="Also testing title"/>
            <SecondaryTitleBlock title="Secondary title "/>
            
            <ParagraphBlock title="Testing text block">
                <p>Testing 1</p>
                <p>Testing 2</p>
                <p>Testing 3</p>
                <p>Testing </p>
            </ParagraphBlock>
        </main>
    )
}