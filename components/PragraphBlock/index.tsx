import ParagraphBlockProps from "./paragraph-block"

export default function ParagraphBlock ({title, subtitle, children}: ParagraphBlockProps) {
    return <div>
        <h1>{title}</h1>
        {subtitle ? <h2>{subtitle}</h2> : <></>}
        {children}
    </div>
}