import { useContext } from 'react';
import { ThemeContext } from './themeProvider';

export function Test(){
    const {theme} = useContext(ThemeContext);
    const header = {
        color:theme.color || 'red',
        fontSize: theme.fontSize || '24px'
    }
    return (
        <h1 style={header}>Test!!</h1>
    )
}