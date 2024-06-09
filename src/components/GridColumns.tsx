type propsType = {
    datasource: any[],
    gridCols: {
        key: string,
        label: string,
        displayField?: any
    }[],
    loading?: boolean
}

export default function GridColumns(props: propsType) {

    const {datasource, gridCols, loading} = props

    return <div>
        {loading ? <h1>Loading ...</h1> : <table>
            <thead>
            <tr>
                {gridCols.map((col, ind) => <th key={ind}>{col.label}</th>)}
            </tr>
            </thead>
            <tbody>
            {datasource.map((rows: any, rowIndex: any) => <tr>
                {gridCols.map((col, ind) => <td
                    key={ind}
                >{col.displayField ? col.displayField(rows) : rows[col.key]}</td>)}
            </tr>)}
            </tbody>
        </table>}
    </div>
}