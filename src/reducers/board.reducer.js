const board = (state = {}, action) => {
    switch (action.type) {
        case 'BOARDS_LOADED':
            return action.boards.reduce((map, board) => {
                map[board.id] = board;
                return map;
            }, {});

        case 'BOARDS_LOAD_FAILED':
            return state
        
        case 'BOARD_FETCHED':
            return { 
                ...state,
                [action.payload.id]: action.payload 
            }
            
        case 'LIST_ADDED':
            return {
                ...state,
                [action.list.board]: {
                    ...state[action.list.board],
                    lists: [
                        ...state[action.list.board].lists,
                        action.list
                    ]
                }   
            }
        case 'LIST_ADDED_SUCCESS':
            return {
                ...state,
                [action.list.board]: {
                    ...state[action.list.board],
                    lists: [
                        ...state[action.list.board].lists.filter(list => list.id != "idTemp"),
                        action.list
                    ]
                }
            }
        case 'BOARD_ADDED':
            return {
                ...state,
                [action.board.id] : {
                    ...action.board,
                    members: action.members
                }
            }
        
        case 'TOGGLE_ADD_LIST':
            if (state.id !== action.id) {
                return state;
            } else {
                return {
                    ...state,
                    toggleAddList: !state.toggleAddList
                }
            }

        case 'SHOW_ADD_MEMBER_BOARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addMember: true
                }
            }

        case 'HIDE_ADD_MEMBER_BOARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addMember: false
                }
            }

        case 'SHOW_ADD_TEAM_BOARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addTeam: true
                }
            }

        case 'HIDE_ADD_TEAM_BOARD':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    addTeam: false
                }
            }


        case 'MEMBER_ADDED_BOARD':
            if (!state[action.id].members.some(member => member.id === action.member.id)){
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        members: [
                            ...state[action.id].members,
                            action.member
                        ]
                    }
                }
            }
            else {
                return state
            }
        case 'TEAM_ADDED_BOARD':
            if (!state[action.id].teams.some(team => team.id === action.team.id)){
                return {
                    ...state,
                    [action.id]: {
                        ...state[action.id],
                        teams: [
                            ...state[action.id].teams,
                            action.team
                        ],
                        members: [
                            ...state[action.id].members,
                            ...action.team.members.filter(member => !state[action.id].members.some(oldMember => oldMember.id === member.id))
                        ]
                    }
                }
            }
            else {
                return state
            }
            
        default:
            return state
    }
}

export default board