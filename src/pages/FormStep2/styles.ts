import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 1rem;
        color: #B8B8D4;
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
            border: 2px solid #fff;
            border-radius: 10px;
            color: #000;
            font-weight: bold;
            outline: 0;
            font-size: 15px;
            background-color: #2B86C5;
            transition: .5s;
            background-color: #74EBD5;
            background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
        }

        input:focus{
            background-color: transparent;
            background-image: none;
            color: #FFF;
            transition: .3s;
        }
    }

    button {
        background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
        color: #000;
        font-size: 1rem;
        font-weight: bold;
        padding: 1rem 2.5rem;
        border: 2px solid #fff;
        border-radius: 1rem;
        cursor: pointer;
        margin-top: 1.5rem;
        transition: .3s;
    }

    button:hover {
        background-color: transparent;
        background-image: none;
        color: #FFF;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;