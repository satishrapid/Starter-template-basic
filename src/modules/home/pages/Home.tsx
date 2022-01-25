import { imageUrl } from '../../../shared/utility'
import { FlexBox } from '../../../shared/flexBox'
import {
    SharedTitle,
    SharedDescription,
    SharedButton,
    SharedDetailBlock,
    SharedForum,
} from '../../../shared/shared'
import { exampleData } from '../utility'
import {
    HomeBody,
    HeadingBlock,
    SectionBlock,
    InfoContainer,
    Grid_2,
    Block1,
    Block2,
    Grid_3,
    GridRowLeft,
    GridRowRight,
    GR_First,
    GR_Second,
    ForumStyle,
} from './style'
import { Navbar } from '../../app/components/navbar/Navbar'
import { withTheme, ThemeProps } from 'styled-components'
import { PageContainer } from '../../../styles/styled'

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
    const { theme } = props

    return (
        <PageContainer noPadding={true}>
            <Navbar />
            <HomeBody>
                <HeadingBlock>
                    <SharedTitle>
                        <span>
                            Magnifient
                        </span>
                        Traverse
                    </SharedTitle>

                    <SharedDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur,
                        nihil odio modi sed asperiores facere? Nobis consectetur distinctio
                        voluptatum maiores, maxime aliquid commodi harum ipsum?
                    </SharedDescription>
                    <SharedButton>Explore More</SharedButton>
                </HeadingBlock>

                <SectionBlock>
                    <InfoContainer>
                        <FlexBox>
                            {exampleData.map((volume, i: number) => (
                                <SharedDetailBlock key={i}>
                                    <div className='title'>{volume.title}</div>
                                    <div className='description'>{volume.description}</div>
                                </SharedDetailBlock>
                            ))}
                        </FlexBox>
                    </InfoContainer>
                </SectionBlock>

                <SectionBlock>
                    <Grid_2>
                        <Block1>
                            <h1 className='headings and system'>Ecosystem</h1>
                            <h3 className='subHeading'>Lorem ipsum dolor sit amet.</h3>
                            <p className='descriptions'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                                ducimus quis quasi numquam, officiis ratione dignissimos non
                                aspernatur minima nemo.
                            </p>
                        </Block1>
                        <Block2>
                            <img src={imageUrl} alt='' />
                        </Block2>
                    </Grid_2>
                </SectionBlock>

                <SectionBlock>
                    <h1 className='headings'>Developers</h1>
                    <Grid_3>
                        <GridRowLeft>
                            <GR_First>
                                <h3 className='subHeading'>Lorem ipsum dolor sit amet.</h3>
                                <p className='descriptions'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                                    ducimus quis quasi numquam, officiis ratione dignissimos non
                                    aspernatur minima nemo.
                                </p>
                                <SharedButton>Explore</SharedButton>
                            </GR_First>
                            <GR_Second>
                                <div className='block'>WhitePaper</div>
                                <div className='block'>Test</div>
                            </GR_Second>
                        </GridRowLeft>
                        <GridRowRight>
                            <div className='block'></div>
                        </GridRowRight>
                    </Grid_3>
                </SectionBlock>
                <SectionBlock>
                    <div className='headings'>protocol governance</div>
                    <ForumStyle>
                        <div className='left'>

                        </div>
                        <div className='right'>
                            <SharedForum>
                                <h3>headings</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Sapiente, earum!
                                </p>
                            </SharedForum>
                            <SharedForum>
                                <h3>headings</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Sapiente, earum!
                                </p>
                            </SharedForum>
                            <SharedForum>
                                <h3>headings</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Sapiente, earum!
                                </p>
                            </SharedForum>
                        </div>
                    </ForumStyle>
                </SectionBlock>
            </HomeBody>
        </PageContainer>
    )
})