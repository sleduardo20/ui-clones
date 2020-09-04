import styled, { css } from 'styled-components';
import { HiOutlineLocationMarker, HiOutlineSearch } from 'react-icons/hi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { BiCart } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 1220px;
  margin: 0 auto;
  height: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopLeft = styled.div`
  height: 100%;
`;

export const Logo = styled.div`
  max-width: 134px;
  height: 34px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

export const LocationProfile = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 4px;

    > span {
      font-size: 12px;
      color: var(--color-gray);
    }
    span + span {
      color: black;
      font-size: 14px;
    }
  }
`;

export const LocaitionIcon = styled(HiOutlineLocationMarker)`
  width: 24px;
  height: 24px;
  color: var(--color-gray);
`;

export const TopCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  width: 598px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-white);
  border-radius: 2px;
  width: 100%;
  height: 39px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);

  > input {
    flex: 1;
    padding: 8px;
    font-size: 16px;
    line-height: 22px;
    background: none;

    &::placeholder {
      color: var(--color-border);
    }
  }

  div {
    padding: 0 8px;
    border-left: 1px solid var(--color-border);
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--color-gray);
`;

export const NavBar = styled.div`
  margin-top: 24px;
  width: 100%;
`;

export const Options = styled.ul`
  display: flex;
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > span {
      font-size: 12px;
      color: var(--color-gray);

      &:hover {
        color: black;
      }
    }
  }

  li + li {
    margin-left: 12px;
  }
`;

export const ArrowDownIcon = styled(RiArrowDownSLine)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;

export const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 100%;

  > h2 {
    font-size: 16px;
    color: var(--color-gray);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RayIcon = styled.div`
  height: 24px;
  width: 24px;

  > img {
    width: 100%;
  }
`;

export const MenuProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  justify-content: space-between;
  margin-top: 28px;
  width: 100%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > strong {
    font-weight: normal;
    font-size: 13px;
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--color-gray);
  cursor: pointer;
`;

export const AvatarIcon = styled(CgProfile)`
  ${iconCSS}
  margin-right:4px;
`;

export const Shopping = styled.div`
  cursor: pointer;
  > strong {
    font-weight: normal;
    font-size: 13px;
  }
`;

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  > strong {
    font-weight: normal;
    font-size: 13px;
  }
`;

export const NotificationIcon = styled(IoIosNotificationsOutline)`
  ${iconCSS}
`;

export const CarIcon = styled(BiCart)`
  ${iconCSS}
`;
