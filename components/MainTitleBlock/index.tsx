export default function Index({title, subtitle}: MainTitleBlockProps) {
    return <div>
        <h1>{title}</h1>
        {subtitle ? <h2>{subtitle}</h2> : <></>}
    </div>
}