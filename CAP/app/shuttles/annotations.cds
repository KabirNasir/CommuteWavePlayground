using AdminService as service from '../../srv/AdminService';
annotate service.Shuttles with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'date',
                Value : date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'isBusFull',
                Value : isBusFull,
            },
            {
                $Type : 'UI.DataField',
                Label : 'remainingSeats',
                Value : remainingSeats,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'date',
            Value : date,
        },
        {
            $Type : 'UI.DataField',
            Label : 'isBusFull',
            Value : isBusFull,
        },
        {
            $Type : 'UI.DataField',
            Label : 'remainingSeats',
            Value : remainingSeats,
        },
    ],
);

annotate service.Shuttles with {
    busID @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'BusDetails',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : busID_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'busNumber',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'seatCapacity',
            },
        ],
    }
};

annotate service.Shuttles with {
    routeID @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'ShuttleRoutes',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : routeID_ID,
                ValueListProperty : 'ID',
            },
        ],
    }
};

annotate service.Shuttles with {
    driverID @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'DriverDetails',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : driverID_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'driverName',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'driverNumber',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'driverLicenseNumber',
            },
        ],
    }
};

