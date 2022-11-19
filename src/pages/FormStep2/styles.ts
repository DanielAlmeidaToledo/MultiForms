import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 1rem;
        color: #404040;
    }
    h1 {
        margin: .5rem 0 0 0;
        padding: 0;
        font-size: 1.8rem;
    }
    hr {
        height: 1px
        border: 0;
        background-color: #16195C;
        margin: 30px 0
    }

    label {
        font-size: 1.1rem;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #B0B0B0;
            border-radius: 10px;
            color: #000;
            font-weight: bold;
            outline: 0;
            font-size: 15px;
            background-color: #fff;
        }

        input:focus{
            border: 2px solid #000;
        }
    }

    button {
        background-color: #000;
        color: #FFF;
        font-size: 1rem;
        font-weight: bold;
        padding: 1rem 2.5rem;
        border: 2px solid #fff;
        border-radius: 1rem;
        cursor: pointer;
        margin-top: 2rem;
        transition: .3s;
    }

    button:hover {
        background-color: transparent;
        color: #000;
        border: 2px solid #000;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #000;
    }
`;