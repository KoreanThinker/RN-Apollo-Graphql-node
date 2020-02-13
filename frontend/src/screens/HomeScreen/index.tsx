import React, { useState } from 'react'
import { View, Text, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import { useQuery } from '@apollo/react-hooks';
import { GET_PROFILE } from '../../component/Querys';

const HomeScreen = () => {

    const [num, setNum] = useState(0)

    const { loading, error, data, refetch } = useQuery(GET_PROFILE, {
        variables: {
            limit: 5
        }
    })

    if (loading) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><ActivityIndicator /></View>
    if (error) return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <TouchableWithoutFeedback onPress={() => refetch()}>
            <Text>오류</Text>
        </TouchableWithoutFeedback>
    </View>

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{data.hello}</Text>
            <TouchableWithoutFeedback onPress={() => {
                refetch().then(({ data }) => console.log(data.profile_aggregate.nodes))
            }}>
                <Text>reload</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => {
                setNum(num + 1)
                refetch()
            }}>
                <Text>add</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default HomeScreen
