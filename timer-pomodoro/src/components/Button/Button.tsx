import styles from './Button.module.css' 
import { ButtonContainer, ButtonVariant } from './Button.styled'

interface ButtonColors {
    color?: ButtonVariant
}

export function Button({color = 'primary'}:ButtonColors){
    return (
        <>  
        <div>
            <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
        </div>
        <div>
            <ButtonContainer variant={color}>Styled-Component</ButtonContainer>
        </div>
        </>
    )
}