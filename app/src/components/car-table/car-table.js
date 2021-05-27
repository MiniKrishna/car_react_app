import React from 'react'
import { Table } from '@consta/uikit/Table';
import { TableTextFilter, TableNumberFilter, TableChoiceGroupFilter } from '@consta/uikit/Table';


import "./car-table.css"

const Img = (address) =>{
    return (
        <img src = {address}  alt="car_picture" className = "car_picture"/>
    )
}


const CarTable = ({cars}) => {


    const columns = [
        {
            title: 'Picture',
            accessor: 'picture',
            align: 'center',
        },
        {
            title: 'Brand',
            accessor: 'brand',
            sortable: true,
            align: "right",
        },
        {
            title: 'Model',
            accessor: 'model',
            align: "center",
        },
        {
            title: 'Year',
            accessor: 'year',
            sortable: true,
            align: "center",
        },
        {
            title: 'Fuel',
            accessor: 'fuel',
            sortable: true,
            align: "center",
        },
        {
            title: 'Mileage, km',
            accessor: 'mileage',
            sortable: true,
            align: "center",
        },
        {
            title: 'BodyType',
            accessor: 'bodyType',
            sortable: true,
            align: "center",
        },
        {
            title: 'Price, usd $',
            accessor: 'price',
            sortable: true,
            align: "center",
            renderCell: (row) => <div className = "table-price">{row.price}</div>,
        },
    ];

    let brandArr = [];
    let modelArr = [];

    const rows = cars.map((item)=>{
        item.picture = Img(item.picture)
        brandArr.push({name: item.brand, value: item.brand})
        modelArr.push({name: item.model, value: item.model})
        let carRow = {...item}
        return carRow;
    })

    const rangeFilter = (cellValue, minMax) => {
        if (cellValue >= minMax.min && cellValue <= minMax.max) return true
        return false
    }

    const textFilter = (cellValue, filterValues) => {
        return filterValues.some((filterValue) => filterValue && filterValue.value === cellValue);
    };

    const filters = [ 
        {
            id: 'prices',
            name: 'Price range: ',
            filterer: rangeFilter,
            field: 'price',
            component: {
            name: TableNumberFilter,
            },
        },
        {
            id: 'kilometers',
            name: 'Mileage range: ',
            filterer: rangeFilter,
            field: 'mileage',
            component: {
            name: TableNumberFilter,
            },
        },
        {
            id: 'years',
            name: 'Year: ',
            field: 'year',
            filterer: (cellValue, filterValue) => {
                if (filterValue.value === undefined || filterValue.value === null) return true
                return cellValue > filterValue.value;
            },
            component: {
              name: TableChoiceGroupFilter,
              props: {
                items: [{ name: '> 2019', value: 2019 },
                { name: '> 2015', value:  2015 },
                { name: '> 2010', value: 2010 },
                { name: '> 2005', value: 2005 }],
              },
            },
        },
        {
            id: 'fuels',
            name: 'Fuel type: ',
            field: 'fuel',
            filterer: textFilter,
            component: {
              name: TableTextFilter,
              props: {
                withSearch: true,
                items: [
                  { name: 'diesel', value: 'diesel' },
                  { name: 'petrol', value: 'petrol' },
                  { name: 'electric', value: 'electric' },
                  { name: 'hybrid', value: 'hybrid' },
                ],
              },
            },
        },
        {
            id: 'bodyTypes',
            name: 'Body type: ',
            field: 'bodyType',
            filterer: textFilter,
            component: {
              name: TableTextFilter,
              props: {
                withSearch: true,
                items: [
                  { name: 'Hatchback', value: 'hatchback' },
                  { name: 'Estate', value: 'estate' },
                  { name: 'SUV', value: 'SUV' },
                  { name: 'Sedan', value: 'sedan' },
                  { name: 'MPV', value: 'MPV' },
                ],
              },
            },
        },
        {
            id: 'brands',
            name: 'Brand: ',
            field: 'brand',
            filterer: textFilter,
            component: {
              name: TableTextFilter,
              props: {
                withSearch: true,
                items: brandArr,
              },
            },
        },
        {
            id: 'models',
            name: 'Model: ',
            field: 'model',
            filterer: textFilter,
            component: {
              name: TableTextFilter,
              props: {
                withSearch: true,
                items: modelArr,
              },
            },
        },
    ]




    return <Table rows={rows} columns={columns} filters = {filters} className = "table" stickyColumns = {1} borderBetweenRows = {true} verticalAlign = "center" />
}

export default CarTable; 