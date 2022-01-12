import PropTypes from 'prop-types';

function NewsBlock(props) {

    return (
        steps.length > 0 && 
        <table>
            <tbody>
                <tr>
                    <th>Дата</th>
                    <th>Пройдено, км.</th>
                    <th>Действия</th>
                </tr>
                {steps.map(o => 
                    <tr key={o.id}>
                        <td>{o.date.toLocaleDateString()}</td>
                        <td>{o.distance}</td>
                        <td><button onClick={()=>handleRemove(o.id)}>X</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        
    )
}

/* StepsTable.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.instanceOf(StepModel)).isRequired,
    onRemove: PropTypes.func.isRequired
} */

export default NewsBlock;