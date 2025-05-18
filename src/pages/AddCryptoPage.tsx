import React from 'react'
import FormCrypto from '../components/organisms/FormCrypto'
import styles from '../styles/AddCryptoPage.module.css'
export default function AddCryptoPage() {
    return (
        <div className={styles.formPage}>
            <h2 className={styles.title}>Add a Cryptocurrency</h2>
            <FormCrypto />
        </div>
    )
}
