export default function Logs({logs}){
    return(
        <div>
            <ol>
                {logs.map((log, index)=>(
                    <li key={index}>
                        {log.player} selected ({log.square.row},{log.square.col})
                    </li>
                ))}
            </ol>
        </div>
    )
}
