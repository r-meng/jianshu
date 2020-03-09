import React from "react";
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList} from "./style";

const getListArea = (show) => {
    if (show) {
        return (
        <SearchInfo>
            <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>)
    }else {
        return null;
    }
};


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handledInputFocus}
                            onBlur={props.handledInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writing'>
                    <i className="iconfont">&#xe845;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
        )
};


const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handledInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handledInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);