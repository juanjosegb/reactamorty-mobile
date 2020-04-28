import styled from 'styled-components/native';

export const CustomSafeAreaView = styled.SafeAreaView`
    padding: 10px;
    flex: 1;
    z-index: 1;
`;

export const ProfileView = styled.View`
    padding: 48px; 
    background-color: white; 
    align-items: center; 
    border-radius: 4px;
`;

export const SpinnerView = styled.SafeAreaView`
    position: absolute;
    padding: 10px;
    flex: 1;
    height: 100%;
    width: 100%;
`;