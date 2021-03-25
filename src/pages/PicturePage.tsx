import { Link } from 'react-router-dom';

type Props = {
    data: {
        [key: string]: string
    }
}

export default function PicturePage({ data }: Props) {

    return (
        <div>
            <Link to="/">
                <h3>&#60; Back</h3>
            </Link>
            <h1>{data.title}</h1>
        </div>
    )
}