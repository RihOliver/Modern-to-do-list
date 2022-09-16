import * as C from './styles';
import { Item } from '../../types/Item'
import { useState } from 'react';


type PropsOfItens = {
    item: Item
}

export const ListItem = ({ item }: PropsOfItens) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.description}</label>
        </C.Container>
    )
}