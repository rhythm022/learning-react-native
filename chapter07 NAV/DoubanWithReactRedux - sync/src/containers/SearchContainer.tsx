import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


import Search from '../components/search'

import { searchNewsSelector } from '../seletors/newsSelectors'

import { searchNews } from '../actions/newsActions';



const mapStateToProps = (state:any) => ({
    filteredNews: searchNewsSelector(state)  
})

const mapDispatchToProps = (dispatch:any)=>(
    bindActionCreators({
        searchNews
    },dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
