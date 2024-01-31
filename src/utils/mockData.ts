export const resourceBookings = {
	'links': {
		'self': 'https://api.planningcenteronline.com/calendar/v2/resource_bookings?order=starts_at&where[ends_at]=2024-02-03&where[starts_at]=2024-02-03',
	},
	'data': [
		{
			'type': 'ResourceBooking',
			'id': '183667775',
			'attributes': {
				'created_at': '2022-02-03T04:04:25Z',
				'ends_at': '2024-02-03T17:00:00Z',
				'quantity': 1,
				'starts_at': '2024-02-03T15:00:00Z',
				'updated_at': '2022-02-03T04:04:25Z',
			},
			'relationships': {
				'event': {
					'data': {
						'type': 'Event',
						'id': '2711226',
					},
				},
				'event_instance': {
					'data': {
						'type': 'EventInstance',
						'id': '97503006',
					},
				},
				'resource': {
					'data': {
						'type': 'Resource',
						'id': '464241',
					},
				},
			},
			'links': {
				'self': 'https://api.planningcenteronline.com/calendar/v2/resource_bookings/183667775',
			},
		},
		{
			'type': 'ResourceBooking',
			'id': '243720132',
			'attributes': {
				'created_at': '2023-08-28T19:09:26Z',
				'ends_at': '2024-02-03T20:30:00Z',
				'quantity': 1,
				'starts_at': '2024-02-03T15:00:00Z',
				'updated_at': '2023-08-28T19:09:26Z',
			},
			'relationships': {
				'event': {
					'data': {
						'type': 'Event',
						'id': '7705208',
					},
				},
				'event_instance': {
					'data': {
						'type': 'EventInstance',
						'id': '135881415',
					},
				},
				'resource': {
					'data': {
						'type': 'Resource',
						'id': '463975',
					},
				},
			},
			'links': {
				'self': 'https://api.planningcenteronline.com/calendar/v2/resource_bookings/243720132',
			},
		},
		{
			'type': 'ResourceBooking',
			'id': '251444411',
			'attributes': {
				'created_at': '2023-10-25T16:34:30Z',
				'ends_at': '2024-02-03T19:00:00Z',
				'quantity': 1,
				'starts_at': '2024-02-03T16:00:00Z',
				'updated_at': '2023-10-25T16:34:30Z',
			},
			'relationships': {
				'event': {
					'data': {
						'type': 'Event',
						'id': '10234261',
					},
				},
				'event_instance': {
					'data': {
						'type': 'EventInstance',
						'id': '140875228',
					},
				},
				'resource': {
					'data': {
						'type': 'Resource',
						'id': '463976',
					},
				},
			},
			'links': {
				'self': 'https://api.planningcenteronline.com/calendar/v2/resource_bookings/251444411',
			},
		},
		{
			'type': 'ResourceBooking',
			'id': '251315249',
			'attributes': {
				'created_at': '2023-10-24T19:11:46Z',
				'ends_at': '2024-02-04T01:00:00Z',
				'quantity': 1,
				'starts_at': '2024-02-03T17:00:00Z',
				'updated_at': '2023-10-24T19:11:46Z',
			},
			'relationships': {
				'event': {
					'data': {
						'type': 'Event',
						'id': '10836005',
					},
				},
				'event_instance': {
					'data': {
						'type': 'EventInstance',
						'id': '140814226',
					},
				},
				'resource': {
					'data': {
						'type': 'Resource',
						'id': '464331',
					},
				},
			},
			'links': {
				'self': 'https://api.planningcenteronline.com/calendar/v2/resource_bookings/251315249',
			},
		},
		{
			'type': 'ResourceBooking',
			'id': '250768708',
			'attributes': {
				'created_at': '2023-10-18T21:38:19Z',
				'ends_at': '2024-02-04T05:00:00Z',
				'quantity': 1,
				'starts_at': '2024-02-04T02:00:00Z',
				'updated_at': '2023-10-18T21:38:19Z',
			},
			'relationships': {
				'event': {
					'data': {
						'type': 'Event',
						'id': '9885999',
					},
				},
				'event_instance': {
					'data': {
						'type': 'EventInstance',
						'id': '140412998',
					},
				},
				'resource': {
					'data': {
						'type': 'Resource',
						'id': '464241',
					},
				},
			},
			'links': {
				'self': 'https://api.planningcenteronline.com/calendar/v2/resource_bookings/250768708',
			},
		},
	],
	'included': [],
	'meta': {
		'total_count': 5,
		'count': 5,
		'can_order_by': ['created_at', 'ends_at', 'starts_at', 'updated_at'],
		'can_query_by': ['created_at', 'ends_at', 'starts_at', 'updated_at'],
		'can_include': ['event_instance', 'event_resource_request', 'resource'],
		'can_filter': [
			'future',
			'approved',
			'pending',
			'rejected',
			'approved_pending',
			'approved_rejected',
			'pending_rejected',
			'approved_pending_rejected',
			'rooms',
			'resources',
		],
		'parent': {
			'id': '140117',
			'type': 'Organization',
		},
	},
};
