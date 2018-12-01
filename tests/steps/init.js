let initialized = false

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api = "https://5dvcbtsx23.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-selman"
    process.env.AWS_REGION = "eu-west-1"
    process.env.order_events_stream = 'orders-dev-selman'
    process.env.restaurant_notification_topic = 'restaurants-dev-selman'

    initialized = true
}

module.exports = {
    init
}