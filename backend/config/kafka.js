import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'], 
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'test-group' });

const connectKafka = async () => {
    try {
        console.log('Connecting to Kafka... 🚀');
        await producer.connect();
        await consumer.connect();
        console.log('Kafka connected successfully 🚀');
    } catch (error) {
        console.error('Error connecting to Kafka:', error);
        if (error.code === 'ECONNREFUSED') {
            console.error('Kafka broker is not reachable. Please ensure that Kafka is running on localhost:9092.');
        }
        throw error; 
    }
};

const disconnectKafka = async () => {
    try {
        await producer.disconnect();
        await consumer.disconnect();
        console.log('Kafka disconnected successfully 🚀');
    } catch (error) {
        console.error('Error disconnecting from Kafka:', error);
    }
};

export { producer, consumer, connectKafka, disconnectKafka };
