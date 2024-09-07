import { List as ListPaper } from 'react-native-paper';

export default function List({ icon, ...props }) {
    return (
        <ListPaper.Item
            {...props}
            left={(props) => <ListPaper.Icon {...props} icon={icon} />}
        />
    );
}