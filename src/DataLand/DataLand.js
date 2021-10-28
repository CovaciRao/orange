import { Component } from 'react';
import FormControl from '../FormControl/FormControl';
const USER_DATA = [
  {
    username: 'ahousego0',
    email: 'sandreini0@mozilla.org',
  },
  {
    username: 'esevier1',
    email: 'wmaddrell1@fda.gov',
  },
  {
    username: 'jyounie2',
    email: 'nmontes2@sohu.com',
  },
  {
    username: 'bsanday3',
    email: 'sgarlic3@goodreads.com',
  },
  {
    username: 'ahaughan4',
    email: 'tmcinally4@hatena.ne.jp',
  },
  {
    username: 'ecornil5',
    email: 'fjuschke5@163.com',
  },
  {
    username: 'egodilington6',
    email: 'wbradder6@weebly.com',
  },
  {
    username: 'dmccomas7',
    email: 'obasketter7@foxnews.com',
  },
  {
    username: 'pgosenell8',
    email: 'hrapi8@google.com.hk',
  },
  {
    username: 'abreakspear9',
    email: 'dcourse9@ibm.com',
  },
  {
    username: 'mrichtera',
    email: 'zgerrya@nih.gov',
  },
  {
    username: 'mbrachellb',
    email: 'ktinmanb@wunderground.com',
  },
  {
    username: 'apercivalc',
    email: 'kbampforthc@elpais.com',
  },
  {
    username: 'nstorahd',
    email: 'cdevonportd@rakuten.co.jp',
  },
  {
    username: 'gdeblinge',
    email: 'gstartee@hc360.com',
  },
  {
    username: 'scutillf',
    email: 'aleekf@edublogs.org',
  },
  {
    username: 'kblunng',
    email: 'khincksg@japanpost.jp',
  },
  {
    username: 'vstrickh',
    email: 'amarchellih@tinypic.com',
  },
  {
    username: 'skernermanni',
    email: 'tsowerbyi@alibaba.com',
  },
  {
    username: 'seddisj',
    email: 'vchildsj@furl.net',
  },
  {
    username: 'mlairdk',
    email: 'gbagottk@prlog.org',
  },
  {
    username: 'mleverichl',
    email: 'thaggatal@people.com.cn',
  },
  {
    username: 'cneevem',
    email: 'arichensm@alibaba.com',
  },
  {
    username: 'ssoppettn',
    email: 'esotworthn@amazon.com',
  },
  {
    username: 'bkasero',
    email: 'dhalliwello@gov.uk',
  },
  {
    username: 'hbaynhamp',
    email: 'nbrandassip@howstuffworks.com',
  },
  {
    username: 'kbilstonq',
    email: 'emilazzoq@berkeley.edu',
  },
  {
    username: 'rsteetr',
    email: 'opollicattr@bloglovin.com',
  },
  {
    username: 'tdelorts',
    email: 'beastwoods@4shared.com',
  },
  {
    username: 'llabbett',
    email: 'dtrumpt@guardian.co.uk',
  },
  {
    username: 'dstoppsu',
    email: 'aotteeu@bandcamp.com',
  },
  {
    username: 'tbimsv',
    email: 'ddinesv@nih.gov',
  },
  {
    username: 'cmutimerw',
    email: 'eroartyw@umn.edu',
  },
  {
    username: 'mallchinx',
    email: 'csneddenx@loc.gov',
  },
  {
    username: 'sclamptony',
    email: 'galelsandrovichy@columbia.edu',
  },
  {
    username: 'agowz',
    email: 'rvowellsz@theguardian.com',
  },
  {
    username: 'jrack10',
    email: 'tdouris10@example.com',
  },
  {
    username: 'mdymond11',
    email: 'cmcveighty11@bloglovin.com',
  },
  {
    username: 'vstredder12',
    email: 'jstannett12@nhs.uk',
  },
  {
    username: 'smccolm13',
    email: 'pmemmory13@fema.gov',
  },
  {
    username: 'zcobbe14',
    email: 'mvideler14@printfriendly.com',
  },
  {
    username: 'nmcgannon15',
    email: 'kluton15@wsj.com',
  },
  {
    username: 'fchilcotte16',
    email: 'tsealove16@auda.org.au',
  },
  {
    username: 'tsandyford17',
    email: 'nbontein17@answers.com',
  },
  {
    username: 'pcheyney18',
    email: 'coglesbee18@amazon.de',
  },
  {
    username: 'mbotha19',
    email: 'sroalfe19@skyrock.com',
  },
  {
    username: 'mscandrett1a',
    email: 'etommaseo1a@friendfeed.com',
  },
  {
    username: 'bgerrard1b',
    email: 'tweson1b@wiley.com',
  },
  {
    username: 'clorain1c',
    email: 'ggeraldi1c@census.gov',
  },
  {
    username: 'bcausbey1d',
    email: 'mocarney1d@auda.org.au',
  },
  {
    username: 'wluck1e',
    email: 'pbenian1e@accuweather.com',
  },
  {
    username: 'rdyter1f',
    email: 'eamorts1f@umn.edu',
  },
  {
    username: 'kkeir1g',
    email: 'jkwietek1g@meetup.com',
  },
  {
    username: 'jfilyukov1h',
    email: 'tcoulson1h@sohu.com',
  },
  {
    username: 'gneasham1i',
    email: 'fmeletti1i@ibm.com',
  },
  {
    username: 'rcrunkhorn1j',
    email: 'sjendas1j@myspace.com',
  },
  {
    username: 'ccruz1k',
    email: 'dcasoni1k@state.tx.us',
  },
  {
    username: 'echad1l',
    email: 'rorrom1l@livejournal.com',
  },
  {
    username: 'dkelston1m',
    email: 'sobrian1m@behance.net',
  },
  {
    username: 'ogleave1n',
    email: 'glucey1n@ox.ac.uk',
  },
  {
    username: 'cgateley1o',
    email: 'ddunnett1o@wikia.com',
  },
  {
    username: 'aaldwick1p',
    email: 'cfrodsam1p@prnewswire.com',
  },
  {
    username: 'aasher1q',
    email: 'barnoll1q@bbc.co.uk',
  },
  {
    username: 'vbezley1r',
    email: 'rbrewin1r@com.com',
  },
  {
    username: 'ltweedie1s',
    email: 'kcrumpe1s@google.fr',
  },
  {
    username: 'ntrahmel1t',
    email: 'rkornel1t@berkeley.edu',
  },
  {
    username: 'hthowes1u',
    email: 'hholtham1u@google.pl',
  },
  {
    username: 'clening1v',
    email: 'cbreming1v@360.cn',
  },
  {
    username: 'pgrimbleby1w',
    email: 'rpigram1w@loc.gov',
  },
  {
    username: 'jswine1x',
    email: 'lairs1x@whitehouse.gov',
  },
  {
    username: 'targue1y',
    email: 'afranzman1y@scientificamerican.com',
  },
  {
    username: 'vduchateau1z',
    email: 'mwhotton1z@imageshack.us',
  },
  {
    username: 'caishford20',
    email: 'mvlies20@dailymail.co.uk',
  },
  {
    username: 'bcowper21',
    email: 'jbilofsky21@umich.edu',
  },
  {
    username: 'kskelly22',
    email: 'medelheit22@usgs.gov',
  },
  {
    username: 'jtwelvetrees23',
    email: 'klarman23@mapy.cz',
  },
  {
    username: 'lflooks24',
    email: 'jphysic24@bbc.co.uk',
  },
  {
    username: 'lcessford25',
    email: 'caizic25@edublogs.org',
  },
  {
    username: 'ccoldicott26',
    email: 'scaldecourt26@usgs.gov',
  },
  {
    username: 'panetts27',
    email: 'aogara27@mashable.com',
  },
  {
    username: 'jsunner28',
    email: 'scluderay28@yandex.ru',
  },
  {
    username: 'slordon29',
    email: 'cleyland29@reuters.com',
  },
  {
    username: 'kjunkison2a',
    email: 'mquinnelly2a@google.it',
  },
  {
    username: 'mguare2b',
    email: 'obrophy2b@shop-pro.jp',
  },
  {
    username: 'mflagg2c',
    email: 'gmahoney2c@dedecms.com',
  },
  {
    username: 'aculkin2d',
    email: 'bfaires2d@360.cn',
  },
  {
    username: 'mspindler2e',
    email: 'nkingshott2e@google.ru',
  },
  {
    username: 'jivankin2f',
    email: 'cporcher2f@netscape.com',
  },
  {
    username: 'dpetruk2g',
    email: 'fminchinden2g@stanford.edu',
  },
  {
    username: 'clohering2h',
    email: 'lchiommienti2h@squarespace.com',
  },
  {
    username: 'rdanbury2i',
    email: 'ccortez2i@google.ca',
  },
  {
    username: 'pgiuroni2j',
    email: 'bcoghlan2j@uiuc.edu',
  },
  {
    username: 'amcilwrick2k',
    email: 'skneller2k@businessinsider.com',
  },
  {
    username: 'mgirdwood2l',
    email: 'myanyshev2l@jigsy.com',
  },
  {
    username: 'jknibley2m',
    email: 'msibery2m@e-recht24.de',
  },
  {
    username: 'vlangan2n',
    email: 'gspinola2n@nsw.gov.au',
  },
  {
    username: 'ldiggins2o',
    email: 'hvandermark2o@cnn.com',
  },
  {
    username: 'eburhouse2p',
    email: 'csenton2p@skype.com',
  },
  {
    username: 'clugden2q',
    email: 'prait2q@tiny.cc',
  },
  {
    username: 'thanhard2r',
    email: 'alaurenty2r@about.me',
  },
];
class DataLand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USER_DATA,
      column: '',
      direction: 'asc',
      filterValue: '',
    }
  }
  availableFilters = ['username', 'email'];
  sortByUsername = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;
    if(this.state.column === 'username') {
      direction = direction === 'asc' ? 'desc' : 'asc';
    }
    sortedArray.sort((a,b) => {
      if(direction === 'asc') {
        //asc sort
        return a.username > b.username ? 1 : a.username < b.username ? -1 : 0;
      } else {
        //desc sort
        return a.username > b.username ? -1 : a.username < b.username ? 1 : 0;
     }
    });
    this.setState({
      users: sortedArray,
      column: 'username',
      direction: direction,
    });
  }

  sortByEmail = () => {
    let sortedArray = this.state.users.slice();
    let direction = this.state.direction;
    if(this.state.column === 'email') {
        direction = direction === 'asc' ? 'desc' : 'asc';
    }
    sortedArray.sort((a,b) => {
      if(direction === 'asc') {
        return a.email > b.email ? 1 : a.email < b.email ? -1 : 0;
      } else {
        return a.email > b.email ? -1 : a.email < b.email ? 1 : 0;
      }
    });
    this.setState({
      users: sortedArray,
      column: 'email',
      direction: direction,
    })
  }

  showUsersNumber = () => {
    let sortedArray = this.state.users.slice();
    return sortedArray.length;
  }

  setFilterValue = (ev) => {
    this.setState({
      filterValue: ev.target.value
    });
  }

  getFilteredItems = (filterValue, availableFilters, itemList) => {
    let filteredItems;
    if(filterValue !== '') {
      filteredItems = itemList.filter((entity) => {
        return availableFilters.some((filterEntry) => {
          const nestedEntry = filterEntry.split('.');
          let entityPropertyValue;     
          if(nestedEntry.length === 1) {
            entityPropertyValue = entity[filterEntry];
            return String(entityPropertyValue).toLowerCase().includes(filterValue)
          } else if(nestedEntry.length === 2 && entity[nestedEntry[0]] !== null) {
              entityPropertyValue = entity[nestedEntry[0]][nestedEntry[1]];
              return String(entityPropertyValue).toLowerCase().includes(filterValue)
            } 
        })
      })
      
    } else {
      filteredItems = itemList;
    }

    return filteredItems;
  }

  createFilteredArray = () => {

  }

  render() {
    const FilteredItems = this.getFilteredItems(this.state.filterValue, this.availableFilters, this.state.users);
    return (
      <>
        <div className="form-control">
          <FormControl setFilterValue={this.setFilterValue}/>
        </div>
        <table className="table table-dark">
          <thead>
            <tr className="table-dark">
              <th>#</th>
              <th>
                <button className="btn btn-info" onClick={this.sortByUsername}>
                  <span>Username</span>
                  {this.state.column === 'username' &&
                    <span className={[
                      "fas",
                      this.state.direction === 'asc' ? "fa-angle-up" : "fa-angle-down"
                    ].join(' ')}></span>
                  }
                </button>
              </th>
              <th>
                <button className="btn btn-info" onClick={this.sortByEmail}>
                  <span>Email</span>
                  {this.state.column === 'email' && 
                    <span className={[
                      "fas",
                      this.state.direction === 'asc' ? "fa-angle-up" : "fa-angle-down"
                    ].join(' ')}></span>
                  }
                </button>
              </th>
            </tr>
          </thead>
          <tbody>                    
            {FilteredItems.map((user, index) => {
              return(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
              );
            })
            }
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th colSpan="3"><span>There are {FilteredItems.length} result{FilteredItems.length > 1 ? "s" : FilteredItems.length == 0 ? "s" : ''} </span></th>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default DataLand;