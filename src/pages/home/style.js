import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 18px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 5px;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    // border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const WriterItem = styled.div`
    width: 278px;
    height: 48px;
    margin: 10px 15px 5px 5px;
    .writer-pic{
        width: 48px;
        height: 48px;
        float: left;
        border-radius: 100px;
        margin-right: 10px;
    }
`;

export const WriterInfo = styled.div`
    width: 210px;
    height: 48px;
    // margin-left: 10px;
    float: left;
    .name {
        line-height: 20px;
        font-size: 15px;
        text-align: left;
    }
    .word-length {
        line-height: 20px;
        color: #999;
        font-size: 13px;
        text-align: left;
    }
`;