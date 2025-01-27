import React from 'react';
import { Handle } from 'reactflow';
import { unaryOperations } from '../../utils/operationDef';

const UnaryNode = ({ id, data }) => {
    const handleSelectChange = (e) => {
        data.onChange(e.target.value);
    };

    return (
        <div className='node unary round' data-testid='unary-node' data-nodeid={id}>
            <Handle
                className='handle input'
                type='target'
                position='left'
                id={`${id}-left`}
            />
            <select
                className='node-dropdown'
                defaultValue={data.value ? data.value : 'sin'}
                onChange={handleSelectChange}
            >
                {unaryOperations.map((op) => (
                    <option key={op.value} value={op.value}>
                        {op.content}
                    </option>
                ))}
            </select>
            <Handle
                className='handle output'
                type='source'
                position='right'
                id={`${id}-right`}
            />
        </div>
    );
};

export default UnaryNode;
